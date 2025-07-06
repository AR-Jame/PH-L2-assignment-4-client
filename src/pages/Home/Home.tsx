import BookList from "./BookList";
import Hero from "./Hero";

const Home = () => {
    return (
        <section className="space-y-20 mb-20">
            <Hero />
            <BookList />
        </section>
    );
};

export default Home;