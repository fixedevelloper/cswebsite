'use client';

import React, {useEffect, useState} from 'react';
import RichTextEditor from '@/components/RichTextEditor';

export default function BlogForm({categories, tags}) {
    const [form, setForm] = useState({
        title: '',
        excerpt: '',
        content: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        categories: [],
        tags: []
    });

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData();

            // Champs texte
            for (let key of ['title','excerpt','content','meta_title','meta_description','meta_keywords']) {
                formData.append(key, form[key]);
            }

            // Categories / tags
            form.categories.forEach(catId => formData.append('categories[]', catId));
            form.tags.forEach(tagId => formData.append('tags[]', tagId));

            // Image
            if (form.image) {
                formData.append('image', form.image);
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
                method: 'POST', // PUT ou PATCH si tu veux modifier
                body: formData,
            });

            if (!res.ok) {
                const err = await res.json();
                alert('Erreur : ' + JSON.stringify(err));
                return;
            }

            const updatedPost = await res.json();
            alert('Post mis à jour avec succès !');
        } catch (err) {
            console.error(err);
            alert('Erreur réseau');
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


    return (
        <div className="container">
            <h3 className="comment-form__title">
                Nouvelle Article
            </h3>

            <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">

                    {/* 🟦 COLONNE GAUCHE */}
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label className="form-label">Titre</label>
                            <input
                                className="form-control"
                                value={form.title}
                                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                                placeholder="Titre"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Résumé</label>
                            <textarea
                                className="form-control"
                                rows={3}
                                value={form.excerpt}
                                onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                                placeholder="Résumé"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Meta Title</label>
                            <input
                                className="form-control"
                                value={form.meta_title}
                                onChange={e => setForm(f => ({ ...f, meta_title: e.target.value }))}
                                placeholder="Titre SEO"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Meta Description</label>
                            <textarea
                                className="form-control"
                                rows={2}
                                value={form.meta_description}
                                onChange={e => setForm(f => ({ ...f, meta_description: e.target.value }))}
                                placeholder="Description SEO"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mots-clés</label>
                            <input
                                className="form-control"
                                value={form.meta_keywords}
                                onChange={e => setForm(f => ({ ...f, meta_keywords: e.target.value }))}
                                placeholder="Mot-cle SEO"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Contenu</label>
                            <RichTextEditor
                                value={form.content}
                                onChange={content => setForm(f => ({ ...f, content }))}
                            />
                        </div>
                    </div>

                    {/* 🟩 COLONNE DROITE */}
                    <div className="col-md-4">
                        <div className="mb-4">
                            <h5>Catégories</h5>
                            {categories.map(cat => (
                                <div key={cat.id} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={form.categories.includes(cat.id)}
                                        onChange={() => toggleCategory(cat.id)}
                                        id={`cat-${cat.id}`}
                                    />
                                    <label className="form-check-label" htmlFor={`cat-${cat.id}`}>
                                        {cat.name}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="mb-4">
                            <h5>Tags</h5>
                            {tags.map(tag => (
                                <div key={tag.id} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={form.tags.includes(tag.id)}
                                        onChange={() => toggleTag(tag.id)}
                                        id={`tag-${tag.id}`}
                                    />
                                    <label className="form-check-label" htmlFor={`tag-${tag.id}`}>
                                        {tag.name}
                                    </label>
                                </div>
                            ))}
                        </div>
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
                                        reader.onload = ev => setForm(f => ({ ...f, preview: ev.target.result }));
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                        </div>

                        {/* Aperçu de l'image */}
                        {form.preview && (
                            <div className="mb-3">
                                <img
                                    src={form.preview}
                                    alt="Aperçu"
                                    className="img-fluid rounded"
                                    style={{ maxHeight: '200px' }}
                                />
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100">
                            Mettre à jour
                        </button>
                    </div>

                </div>
            </form>

        </div>
    );
}
