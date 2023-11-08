<template>
    <div>
        {{ counter }}
        <button class="bg-red-500 px-3 py-2 border rounded-xl text-white hover:bg-red-700" @click="sube(1)">pincha</button>
    </div>
</template>
  
<script setup>
import { ref, watch } from 'vue'

const counter = ref(0)

const sube = (numero) => {
    counter.value += numero
}

watch(counter, (nuevoValor, valorAnterior) => {
    if (nuevoValor > 5) {
        window.location.href = '/';
    }
});

</script>