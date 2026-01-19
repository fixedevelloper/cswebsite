"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab, Nav } from "react-bootstrap";

const ServiceDetails = ({
                            thumbnail,
                            title,
                            activeCategory,
                            description,
                            tabs = [],
                            sidebarCategories = [],
                            documents = [],
                            support,
                        }) => {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Contenu principal */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            <div className="services-details__img">
                                <Image
                                    src={thumbnail}
                                    alt={title}
                                    width={1200}
                                    height={500}
                                    unoptimized={true} // si image locale ou externe
                                />
                            </div>
                            <h3 className="services-details__title-1">{title}</h3>
                            {description && <p className="services-details__text-1">{description}</p>}

                            {/* Tabs dynamiques */}
                            {tabs.length > 0 && (
                                <div className="services-details__tab tabs-box">
                                    <Tab.Container defaultActiveKey={tabs[0].key}>
                                        <Nav as="ul" className="tab-buttons clearfix list-unstyled">
                                            {tabs.map((tab) => (
                                                <Nav.Link key={tab.key} as="li" eventKey={tab.key} className="tab-btn">
                                                    <span>{tab.title}</span>
                                                </Nav.Link>
                                            ))}
                                        </Nav>
                                        <Tab.Content className="tabs-content">
                                            {tabs.map((tab) => (
                                                <Tab.Pane className="tab" eventKey={tab.key} key={tab.key}>
                                                    <div className="services-details__tab-content-inner">
                                                        <p className="services-details__text-5">{tab.content}</p>
                                                        {tab.points && (
                                                            <ul className="services-details__points-two list-unstyled">
                                                                {tab.points.map((p, i) => (
                                                                    <li key={i}>
                                                                        <div className="services-details__points-two-shape" />
                                                                        <p className="services-details__points-two-text">{p.text}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {tab.image && (
                                                            <div className="services-details__points-img">
                                                                <Image
                                                                    src={tab.image}
                                                                    alt={title}
                                                                    width={600}
                                                                    height={400}
                                                                    unoptimized={true}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            {/* Catégories */}
                            {sidebarCategories.length > 0 && (
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Catégories de services</h3>
                                    <ul className="sidebar__category-list list-unstyled">
                                        {sidebarCategories.map((cat, index) => (
                                            <li key={index} className={cat.href === '/services/'+activeCategory ? "active" : ""}>
                                                <Link href={cat.href}>
                                                    {cat.text}
                                                    <span className="icon-right-arrow-1" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Documents */}
                            {documents.length > 0 && (
                                <div className="sidebar__single sidebar__download">
                                    <ul className="sidebar__download-list list-unstyled">
                                        {documents.map((doc, i) => (
                                            <li key={i}>
                                                <a href={doc.href}>
                                                    {doc.text} <span className="icon-cloud-download" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Support */}
                            {support && (
                                <div className="sidebar__single sidebar__support">
                                    {support.bgImage && (
                                        <div
                                            className="sidebar__support-bg"
                                            style={{ backgroundImage: `url(${support.bgImage})` }}
                                        />
                                    )}
                                    <h3 className="sidebar__support-title">{support.title}</h3>
                                    <p className="sidebar__support-text">{support.text}</p>
                                    <div className="sidebar__support-btn-box">
                                        <a href={support.btnHref} className="sidebar__support-btn thm-btn">
                                            {support.btnText}
                                            <span /><span /><span /><span /><span />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
