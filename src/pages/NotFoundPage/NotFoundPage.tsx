import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NotFoundPage() {
    return (
        <>
            <Header />
            <h1 style={{ textAlign: "center", display: "flex", height: "80vh",
                justifyContent: "center", alignItems: "center", color: "var(--main-orange-color)"}}>
                Страница не найдена
            </h1>
            <Footer />
        </>
    )

}

export default NotFoundPage;