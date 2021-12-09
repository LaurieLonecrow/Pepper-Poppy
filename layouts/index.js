import MobileMenu from "../components/MobileMenu";

export default function MainLayout(props) {


    return (
        <>
        <main>{props.children}</main>
        <MobileMenu />
        </>
    )
}