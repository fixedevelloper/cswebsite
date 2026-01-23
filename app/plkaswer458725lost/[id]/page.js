import React, { use } from 'react';
import EditPostClient from "../../../components/EditBlogClient";
import FutxoLayout from "../../../Layout/FutxoLayout";

export default async  function EditPostPage({params}) {
    const {id} = await params;

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
                        <EditPostClient id={id} categories={categories} tags={tags}/>
                    </div>
                </div>
            </section>
        </FutxoLayout>
    )
        ;
}




