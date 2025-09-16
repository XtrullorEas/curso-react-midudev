import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: "midudev",
        name: "Miguel Angel Duran",
        isFollowing: true,
    },
    {
        userName: "moroteeas",
        name: "Elias Morote",
        isFollowing: false,
    },
    {
        userName: "pheralb",
        name: "Pablo Hernandez",
        isFollowing: false,
    },
    {
        userName: "TMChein",
        name: "Tomas",
        isFollowing: false,
    },
];

export function App() {
    return (
        <section className="App">
            {users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            ))}
        </section>
    );
}
