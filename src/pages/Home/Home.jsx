import DefaultLayout from "../../layout/DefaultLayout";
import LayoutOne from "./layout/LayoutOne/LayoutOne";
import LayoutThree from "./layout/LayoutThree/LayoutThree";
import LayoutTwo from "./layout/LayoutTwo/LayoutTwo";
const Home = () => {
    return (
        <DefaultLayout>
        <div className="home">
            <LayoutOne />
            <LayoutTwo />
            <LayoutThree />
            
        </div>
        </DefaultLayout>
    );
};

export default Home;
