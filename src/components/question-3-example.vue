<template>
    <div>
        <p>Drag the W3Schools image into the rectangle:</p>

        <div id="div1" @drop="drop($event)" @dragover="allowDrop($event)"></div>
        <br>
        <img class="emoticon" id="drag1" src="../assets/happy.jpg" draggable="true" @dragstart="drag($event)"
            width="336" height="69">
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
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },

        drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        },

        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            console.log(data)
            ev.target.appendChild(document.getElementById(data));
        }
    }
}
</script>

<style scoped>
.emoticon {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    padding: 10px;
}

#div1 {
    width: 350px;
    height: 70px;
    padding: 10px;
    border: 1px solid #aaaaaa;
}

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
    width: 250px;
    margin: 20px auto 0;
    padding: 10px;
}

.noActive {
    display: none;
}
</style>