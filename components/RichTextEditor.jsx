'use client';

import { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';

export default function RichTextEditor({ value, onChange, post_id }) {
    const editorRef = useRef(null);
    const quillRef = useRef(null);

    // 🖼 Upload image vers Laravel
    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append('image', file);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/posts/upload-image/${post_id}`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await res.json();

            // ✅ Quill vanilla
            const quill = quillRef.current;
            const range = quill.getSelection(true);

            quill.insertEmbed(range.index, 'image', data.url);
            quill.setSelection(range.index + 1);
        };
    };

    // 🚀 Initialisation Quill
    useEffect(() => {
        let mounted = true;

        (async () => {
            const Quill = (await import('quill')).default;
            if (!mounted || quillRef.current) return;

            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: {
                        container: [
                            ['bold', 'italic', 'underline'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['link', 'image'],
                            ['clean'],
                            ['code-block'],
                            ['code'],[{size: 'small'}]
                        ],
                        handlers: {
                            image: handleImageUpload,
                            code: () => {
                                const quill = quillRef.current;
                                const html = prompt('Modifier le HTML', quill.root.innerHTML);
                                if (html !== null) {
                                    quill.clipboard.dangerouslyPasteHTML(html);
                                }
                            },
                        },
                    },
                },
            });

            // Charger le HTML existant (mode édition)
            if (value) {
                quillRef.current.clipboard.dangerouslyPasteHTML(value);
            }

            quillRef.current.on('text-change', () => {
                onChange(quillRef.current.root.innerHTML);
            });
        })();

        return () => {
            mounted = false;
        };
    }, []);

    // 🔁 Sync contenu externe → Quill
    useEffect(() => {
        if (!quillRef.current) return;

        if (value !== quillRef.current.root.innerHTML) {
            quillRef.current.clipboard.dangerouslyPasteHTML(value || '');
        }
    }, [value]);

    return <div ref={editorRef} style={{ minHeight: 300 }} />;
}



