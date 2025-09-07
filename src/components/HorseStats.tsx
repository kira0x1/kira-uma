import "./HorseStats.css"

export function HorseStats() {
    return (
        <div class="horse-stats">
            <div class="horse-bio">
                <div class="horse-portrait">
                    <img src="/src/assets/icons/chara/chr_icon_1001.png" />
                </div>
                <div class="horse-name">
                    Goldship
                </div>
            </div>
            <div class="stats-container">
                <Stat title={"Speed"} value={22} />
                <Stat title={"Stamina"} />
                <Stat title={"Power"} />
                <Stat title={"Guts"} />
                <Stat title={"Wit"} />
            </div>
        </div>)
}

function Stat(props) {
    return <div class="stat">
        <div class="stat-header">
            {props.title}
        </div>
        <input class="stat-value" type="number" min="1" max="1200" value={props.value ?? 0} />
        {/* <div class="stat-value">{props.value ?? 0}</div> */}
    </div>
}