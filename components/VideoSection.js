import Link from "next/link";

export const VideoSection2 = () => {
    return (
        <section className="video-two">
            <div
                className="video-two__bg jarallax"
                data-jarallax=""
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                    backgroundImage:
                        "url(assets/images/backgrounds/video-two-bg.webp)",
                }}
                aria-hidden="true"
            />

            <div className="video-two__shape-2" />

            <div className="container">
                <div className="video-two__inner">

                    <div className="video-two__video-link">
                        <div className="video-two__shape-1 float-bob-y">
                            <img
                                src="assets/images/shapes/video-two-shape-1.png"
                                alt="Décoration graphique CSCREATIV"
                            />
                        </div>

                        <a
                            href="https://www.youtube.com/watch?v=oUxrU6EFOlg"
                            className="video-popup"
                            aria-label="Voir la présentation vidéo de Creativ Solution"
                        >
                            <div className="video-two__video-icon">
                                <span className="fa fa-play" aria-hidden="true" />
                                <i className="ripple" />
                            </div>
                        </a>
                    </div>

                    <h3 className="video-two__title">
                        Des solutions digitales <br />
                        qui transforment vos idées en succès
                    </h3>

                    <p className="video-two__text">
                        CSCREATIV by Creativ Solution accompagne les entreprises
                        dans la conception de solutions web, mobiles et métiers
                        performantes et innovantes.
                    </p>

                </div>
            </div>
        </section>
    );
};


