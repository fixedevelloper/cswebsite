'use client';

import React, {useEffect, useState} from 'react';
import RichTextEditor from '@/components/RichTextEditor';


export default function EditPostClient({ id, categories, tags }) {
    const [form, setForm] = useState({
        title: '',
        excerpt: '',
        content: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        categories: [],
        tags: [],
        image_url: '',
        image: null,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}/single`,
                    { cache: 'no-store' }
                );

                const postData = await res.json();
                const  post=postData.data
                console.log(post.data)
                setForm({
                    title: post.title ?? '',
                    excerpt: post.excerpt ?? '',
                    content: post.content ?? '',
                    meta_title: post.meta_title ?? '',
                    meta_description: post.meta_description ?? '',
                    meta_keywords: post.meta_keywords ?? '',
                    categories: post.categories?.map(c => c.id) ?? [],
                    tags: post.tags?.map(t => t.id) ?? [],
                    image_url: post.image_url ?? '',
                    image: null,
                });

            } catch (e) {
                console.error('Erreur chargement post', e);
                alert('Impossible de charger le post');
            } finally {
                setLoading(false);
            }
        }

        loadPost();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        ['title','excerpt','content','meta_title','meta_description','meta_keywords']
            .forEach(k => formData.append(k, form[k] ?? ''));

        form.categories.forEach(id => formData.append('categories[]', id));
        form.tags.forEach(id => formData.append('tags[]', id));

        if (form.image) {
            formData.append('image', form.image);
        }

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
                {
                    method: 'POST', // ou PATCH
                    body: formData,
                }
            );

            if (!res.ok) throw await res.json();

            alert('✅ Post mis à jour');
        } catch (err) {
            console.error(err);
            alert('❌ Erreur lors de la mise à jour');
        }
    }

    function toggleCategory(id) {
        setForm(f => ({
            ...f,
            categories: f.categories.includes(id)
                ? f.categories.filter(c => c !== id)
                : [...f.categories, id]
        }));
    }

    function toggleTag(id) {
        setForm(f => ({
            ...f,
            tags: f.tags.includes(id)
                ? f.tags.filter(t => t !== id)
                : [...f.tags, id]
        }));
    }

    if (loading) return <p>Chargement…</p>;

    return (
        <div className="container">
            <h3>Modifier le blog : {form.title}</h3>

            <form onSubmit={handleSubmit}>
                <div className="row g-4">

                    {/* GAUCHE */}
                    <div className="col-md-8">
                        <input
                            className="form-control mb-3"
                            value={form.title}
                            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                            placeholder="Titre"
                        />

                        <textarea
                            className="form-control mb-3"
                            rows={3}
                            value={form.excerpt}
                            onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                            placeholder="Résumé"
                        />

                        <RichTextEditor
                            value={form.content}
                            onChange={content => setForm(f => ({ ...f, content }))}
                            post_id={id}
                        />
                    </div>

                    {/* DROITE */}
                    <div className="col-md-4">

                        <h5>Catégories</h5>
                        {categories.map(cat => (
                            <div key={cat.id} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={form.categories.includes(cat.id)}
                                    onChange={() => toggleCategory(cat.id)}
                                />
                                <label className="form-check-label">
                                    {cat.name}
                                </label>
                            </div>
                        ))}

                        <h5 className="mt-3">Tags</h5>
                        {tags.map(tag => (
                            <div key={tag.id} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={form.tags.includes(tag.id)}
                                    onChange={() => toggleTag(tag.id)}
                                />
                                <label className="form-check-label">
                                    {tag.name}
                                </label>
                            </div>
                        ))}
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setForm(f => ({ ...f, image: file }));

                                        // Prévisualisation
                                        const reader = new FileReader();
                                        reader.onload = ev => setForm(f => ({ ...f, image_url: ev.target.result }));
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                        </div>

                        {/* Aperçu de l'image */}
                        {form.image_url && (
                            <div className="mb-3">
                                <img
                                    src={form.image_url}
                                    alt="Aperçu"
                                    className="img-fluid rounded"
                                    style={{ maxHeight: '200px' }}
                                />
                            </div>
                        )}
                        <button className="btn btn-primary w-100 mt-4">
                            Mettre à jour
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
}


