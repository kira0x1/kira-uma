import "./style.css"
import { HorseStats } from "../../components/HorseStats";

export function Simulator() {
    return (
        <div class="simulator">
            <h1>Simulator</h1>
            <div class="uma-profile">
                <HorseStats />
            </div>
        </div>
    )
}