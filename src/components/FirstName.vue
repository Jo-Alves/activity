<template>
    <div class="container">
        <div class="d-input"><input type="text" name="" id="" placeholder="Seu nome" v-model="name"></div>
        <button @click="goNext">Prosseguir</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    methods: {
        goNext() {
            if (!this.name.trim())
                return alert("Digite seu nome.")

            this.$store.commit("changeName", this.name.trim().toUpperCase())
            this.$router.push({ name: "welcome" })
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 50%;
    margin: 0 auto;
    border: 1px solid;
    border-radius: 10px;
}

.d-input {
    width: 80%;
    border-bottom: 1px solid;
    padding: 10px;
}

.d-input input {
    outline: none;
    border: none;
    background: none;
    width: 100%;
}

button {
    outline: none;
    width: 300px;
    border: none;
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
    margin-top: 20px;
}
</style>