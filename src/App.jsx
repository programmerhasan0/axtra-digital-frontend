import Home from "@pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

const App = () => {
    const appRef = useRef(null);

    return (
        <main ref={appRef}>
            <Home />
        </main>
    );
};

export default App;
