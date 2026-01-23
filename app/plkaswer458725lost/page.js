import React from "react";
import FutxoLayout from "../../Layout/FutxoLayout";
import BlogForm from "../../components/BlogForm";

const CreateBlogPage = async () => {
    const [catRes, tagRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {cache: 'no-store'}),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tags`, {cache: 'no-store'})
    ]);

    if (!catRes.ok || !tagRes.ok) {
        throw new Error('Impossible de récupérer categories ou tags');
    }

    const categoriesJson = await catRes.json();
    const tagsJson = await tagRes.json();

    const categories = categoriesJson.data ?? []; // ✅ tableau
    const tags = tagsJson.data ?? [];             // ✅ tableau

    return (
        <FutxoLayout>

            {/* Section devis */}
            <section className="contact-page">
                <div className="container">
                    <div className="row">
                        <BlogForm categories={categories} tags={tags}/>

                    </div>
                </div>
            </section>
        </FutxoLayout>
    );
};

export default CreateBlogPage;
