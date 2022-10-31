<template>
    <div class="question-1">
        <h1>Questão 1</h1>
        <p>Dê um clique na Estrela dourado</p>
        <div class="imgs-stars">
            <div class="img-star" v-for=" { url, alt, id } in stars" :key="id">
                <img :src="url" :alt="alt" @click="countClickeStarGolden(id)">
            </div>
        </div>
        <button :class="{ active: isActive, noActive: isActive === false }" @click="goNext">Próximo</button>
    </div>
</template>

<script>
export default {
    created() {
        this.randonStars()
    },
    data() {
        return {
            stars: [],
            count: 0,
            hit: 0,
            isActive: false
        }
    },
    methods: {
        goNext() {
            this.$router.push({ name: "questao-2" })
        },
        countClickeStarGolden(id) {
            ++this.count;
            if (this.isActive)
                return
                
            if (id === 1) {
                ++this.hit
                this.$store.commit("changeHits", this.hit)
                console.log(this.hit)
            }
            if (this.count < 4) {
                this.randonStars()
                return
            }


            this.isActive = this.count >= 5 ? true : false
        },
        randonStars() {
            this.stars = [
                { id: 1, url: require("../assets/star-golden.png"), alt: "Estrela dourado" },
                { id: 2, url: require("../assets/star-green.jpg"), alt: "Estrela verde" },
                { id: 3, url: require("../assets/star-pink.jpg"), alt: "Estrela rosa" },
                { id: 4, url: require("../assets/star-blue.jpg"), alt: "Estrela azul" }
            ]

            function render(array) {
                let currentIndex = array.length, randomIndex;

                while (currentIndex != 0) {

                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                }

                return array;
            }

            // Used like so
            render(this.stars);
        }
    }
}
</script>

<style>
.question-1 {}

.imgs-stars {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
}

.img-star {
    width: 100px;
    height: 100px;
    margin-left: 5px;
}

.img-star img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.active {
    outline: none;
    border: none;
    padding: 10px 15px;
    background-color: brown;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
    display: inline-block;
    cursor: pointer;
}

.noActive {
    display: none;
}
</style>