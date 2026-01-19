"use client";
import Breadcrumb from "@/components/Breadcrumb";
import FutxoLayout from "@/Layout/FutxoLayout";
import Link from "next/link";
import {projectData} from "../../utility/projetData";
import React, {useState} from "react";

/*export const metadata = {
  title: "Nos realisations",
};*/


const page = () => {
    return (
        <FutxoLayout>
            <Breadcrumb title="Nos Réalisations" />

            <section
                className="portfolio-two"
                id="portfolio"
                itemScope
                itemType="https://schema.org/CreativeWork"
            >
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Nos Réalisations</span>
                        <h2 className="section-title__title">
                            Découvrez nos projets récents <br />
                            pour le Cameroun et l'Afrique
                        </h2>
                    </div>

                    <ul className="list-unstyled row portfolio-two__list portfolio-two__list-row">
                        {projectData.map((item) => (
                            <li
                                key={item.id}
                                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                                itemScope
                                itemType="https://schema.org/CreativeWork"
                            >
                                <div className="portfolio-two__single">
                                    <div
                                        className="portfolio-two__img"
                                        style={{
                                            backgroundImage: `url(/assets/images/solutions/${item.image})`,
                                        }}
                                    >
                                        <div className="portfolio-two__title-box">
                                            <div className="portfolio-two__title-box-inner">
                                                <p className="portfolio-two__sub-title">
                                                    {item.subTitle}
                                                </p>
                                                <h4 className="portfolio-two__title" itemProp="name">
                                                    <Link href={item.detailLink}>
                                                        {item.title}
                                                    </Link>
                                                </h4>
                                                <p
                                                    className="portfolio-two__description"
                                                    itemProp="description"
                                                >
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="portfolio-two__arrow">
                                                <Link
                                                    href={item.detailLink}
                                                    aria-label={`Voir les détails du projet ${item.title}`}
                                                >
                                                    <span className="icon-next" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </FutxoLayout>
    );
};

export default page;
