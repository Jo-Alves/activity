<template>
    <div class="question-2">
        <h1>Questão 2</h1>
        <p>Dê um clique na Estrela dourado</p>
        {{ $store.state.hit }} 

        <button :class="{ active: isActive, noActive: isActive === false }">Próximo</button>
    </div>
</template>

<script>
export default {

    data() {
        return {

            isActive: false
        }
    },
    methods: {

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