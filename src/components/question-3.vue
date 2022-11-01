<template>
    <div>
        <h1>Questão 3</h1>
        <p>Arraste as imagens de acordo com o nome de cada equipamento:</p>
        <div class="container">
            <div class="equipaments">
                <div class="div-equip">
                    <p>Monitor</p>
                    <div class="equipament" id="monitor" @drop="drop($event)" @dragover="allowDrop($event)"></div>
                </div>
                <div class="div-equip">
                    <p> Mouse</p>
                    <div class="equipament" id="mouse" @drop="drop($event)" @dragover="allowDrop($event)"></div>
                </div>
                <div class="div-equip">
                    <p>Teclado</p>
                    <div class="equipament" id="teclado" @drop="drop($event)" @dragover="allowDrop($event)">
                    </div>
                </div>
                <div class="div-equip">
                    <p>Impressora</p>
                    <div class="equipament" id="print" @drop="drop($event)" @dragover="allowDrop($event)">
                    </div>
                </div>
                <div class="div-equip">
                    <p>Gabinete</p>
                    <div class="equipament" id="gabinete" @drop="drop($event)" @dragover="allowDrop($event)">
                    </div>
                </div>
            </div>
            <div class="imgs-equipament">
                <div class="img" @dragstart="drag($event)">
                    <img id="img-print" src="../assets/impressora.webp" draggable="true" alt="imagem de impressora" />
                </div>
                <div class="img" @dragstart="drag($event)">
                    <img src="../assets/gabinete.webp" id="img-gabinete" alt="imagem de gabinete" draggable="true" />
                </div>
                <div class="img" @dragstart="drag($event)">
                    <img id="img-monitor" src="../assets/monitor.jpg" alt="imagem de impressora" draggable="true" />
                </div>
                <div class="img" @dragstart="drag($event)">
                    <img id="img-teclado" src="../assets/teclado.webp" alt="Imagem do teclado de um computador"
                        draggable="true" />
                </div>
                <div class="img" @dragstart="drag($event)">
                    <img id="img-mouse" src="../assets/mouse.jpg" alt="mouse do computador" draggable="true" />
                </div>
            </div>
        </div>
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
        goNext() {
            this.$router.push({ name: "result" })
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
            ev.target.appendChild(document.getElementById(data));
            if (ev.target.id === data.split("-")[1]) {
                ++this.hit
                this.$store.commit("changeHits", { index: 2, question: 3, hit: this.hit })
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
    background-color: #42b983;
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