<template>
    <div class="modal-container">
        <div class="modal-content">
            <span @click="$emit('is-help-modal-open')" class="material-symbols-outlined close-icon"> close </span>
            <h3>Välkommen till FrågeFejden</h3>
            <p>
                FrågeFejden är det ultimata spelet för alla quizälskare – en
                spännande kamp i allmänbildning där bara den skarpaste hjärnan
                kan sitta kvar på tronen!
            </p>
            <p>
                Spela ensam och försök klättra så högt upp på highscore-listan
                som du kan, eller utmana en vän till fejd!
            </p>
            <p>
                När du startar ett spel så skapas 18 frågor i 3 kategorier på
                ett spelbräde. Varje fråga är värd mellan 100 - 600 poäng.
                Svarar du rätt så vinner du antalet poäng men du måste vara
                snabbtänkt, du har bara 20 sekunder på dig att besvara varje
                fråga.
            </p>
        </div>
    </div>
</template>

<script></script>

<style scoped>
    .modal-container {
        backdrop-filter: blur(5px);
        background-color: hsla(0, 0%, 0%, 0.2);
        bottom: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100vw;
    }

    .modal-content {
        background-color: var(--color-neutral-light);
        border-radius: 1em;
        color: var(--color-neutral-dark);
        display: flex;
        flex-direction: column;
        height: fit-content;
        margin-inline: auto;
        max-width: 80%;
        padding: 1em 2em;
        position: relative;
        .close-icon {
            cursor: pointer;
            position: absolute;
            right: 1em;
            top: 1em;
        }
    }

    @media (min-width: 890px) {
        .modal-content {
            max-width: 50em;
        }
    }
</style>
