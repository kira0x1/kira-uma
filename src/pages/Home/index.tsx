import "./style.css";

export function Home() {
    return (
        <div class="home">
            <h1>Get Started building Vite-powered Preact Apps </h1>
            <section>
                <Resource
                    title="Simulator 🏇📊"
                    description="Race Simulator"
                    href="/sim"
                />
                <Resource
                    title="Skills"
                    description="Skill Database"
                    href="/skills"
                />
            </section>
        </div>
    );
}

function Resource(props) {
    return (
        <a href={props.href} class="resource">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </a>
    );
}
