<template>
    <ul class="list-group list-group-flush" id="geser">
        <a class="mb-4 list-group-item bg-light text-dark list-group-item-action active pointer" v-for="(item, index) in propListNote" :key="index" @click="idNote(item.id)">
            <h5 class="mt-2">{{item.title}}</h5>
            <span class="d-inline-block mb-3">{{item.description}}</span>
        </a>
    </ul>
</template>

<script>
export default {
    name: "ListNotes",

    props: {
        propListNote: [], // ini adalah data note yang dikirimkan oleh Index.vue 
        propEditNote: function() { // ini adalah data note yang akan diedit yang dikirimkan oleh Index.vue

        }
    }, 

    methods: {
        idNote: function(id) {  // Method idNote memperoleh id note saat user mengeklik salah satu list note nya
            this.propEditNote(id); // lalu kita kirimkan id dari note yang diklik ke Index.vue melalui propEditNote
        },
    }
}
</script>


<style>


</style>