<template>
    <div>
        <h1>Resultado Final</h1>
        {{ showResult }}
        <div>
            <img :src="changeEmoticon" alt="emoticon">
        </div>
        <button @click="goBack">Refazer o exercício</button>

    </div>
</template>

<script>
export default {
    created() {
        this.calculateAverage();
    },
    data() {
        return {
            stars: [],
            count: 0,
            hit: 0,
            isActive: false,
            average: 0
        }
    },
    computed: {
        changeEmoticon() {
            return this.average >= 60 ? require("../assets/happy.jpg") : require("../assets/cry.png")
        },
        showResult() {
            return `${this.average >= 60 ? `Parabéns, você obteve a média de ${this.average}%` : `Que pena, você só obteve a média de ${this.average}%`}`
        },
    },
    methods: {
        calculateAverage() {
            this.$store.state.hits.forEach(({ hit }) => {
                this.hit += hit
            })

            this.average = ((this.hit * 100) / 15).toFixed(2);
        },
        goBack() {
            this.$store.commit("deleteEvaluation")
            this.$router.push({ name: "questao-1" })
        },
    }
}
</script>

<style scoped>

img {
    width: 200px;
    height: 200px;
    cursor: pointer;
}

button {
    outline: none;
    border: none;
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
    margin-top: 20px;
}

.active {
    background-color: brown;
    color: white;
    border-radius: 5px;
    display: block;
    width: 450px;
    margin: 20px auto 0;
    padding: 10px;
}

.noActive {
    display: none;
}

.emoticon {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    padding: 10px;
}

.result {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>