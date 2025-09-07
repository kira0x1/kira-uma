import "./HorseStats.css"

export function HorseStats() {
    return (<div class="horse-stats">
        <div class="horse-portrait">
            <img src="/src/assets/icons/chara/chr_icon_1001.png" />
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
        <div class="stat-value">{props.value ?? 0}</div>
    </div>
}