<template>
    <div @click="$emit('is-help-modal-open')" class="modal-container">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Välkommen till FrågeFejden</h3>
                <span @click="isModalOpen = false" class="material-symbols-outlined close-icon"> close </span>
            </div>
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

</style>
