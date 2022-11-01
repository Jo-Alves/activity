<template>
    <div>
        <h1>Questão 4</h1>
        <p @select="selected($event)">Select</p>
        palavra
        <footer :class="{ active: isActive, noActive: isActive === false }">
            <div class="result">
                <img :src="changeEmoticon" alt="" class="emoticon" />
                <p> {{ showResult() }}</p>
            </div>
            <button @click="goNext">Próximo</button>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stars: [],
            count: 0,
            hit: 0,
            isActive: false
        }
    },
    computed: {
        changeEmoticon() {
            return this.hit >= 3 ? require("../assets/happy.jpg") : require("../assets/cry.png")
        },
    },
    methods: {
        selected(e){
            console.log(e)
        },
        goNext() {
            this.$router.push({ name: "questao-3" })
        },
        showResult() {
            if (this.isActive)
                return `${this.hit >= 3 ? "Parabéns, você obteve" : "Que pena, você só obteve"} ${this.hit}
                ${this.hit === 1 ? "ponto" : "pontos"} de 5 tentativas`
        },
        allowDrop(ev) {
            ev.preventDefault();
        },

        drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        },

        drop(ev) {
            ev.preventDefault();
            ++this.count
            var data = ev.dataTransfer.getData("text");
            ev.target.innerHTML = ""
            console.log(ev.target.draggable)
            console.log(data.split("-")[1])
            ev.target.appendChild(document.getElementById(data));
            if (ev.target.id === data.split("-")[1]) {
                ++this.hit
                this.$store.commit("changeHits", { index: 2, question: 3, hit: this.hit })
                console.log(this.$store.state.hits)
            }

            if (this.count === 5)
                this.isActive = true

        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(233, 226, 226);
    width: 550px;
    margin: 0 auto;
    padding: 5px;
}

.div-equip {}

.div-equip p {
    text-align: center;
    display: inline-block;
}

.imgs-equipament {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.img {
    width: 85px;
    height: 85px;
    margin-left: 15px;
    margin-bottom: 20px;
}

.equipaments {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.equipament {
    width: 87px;
    height: 87px;
    margin-left: 15px;
    margin-bottom: 18px;
    border: 1px solid;
}

img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

button {
    outline: none;
    border: none;
    padding: 10px 15px;
    background-color: green;
    color: white;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
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