<template>

    <div class="row justify-content-between">
    
        <div class="col-md-3 bg-dark pt-3" >
          <a href="https://wegodev.com" class="nav-link ml-2 text-center">
            <h1 class="d-inline-block text-danger pr-2">Wegodev</h1>
            <span class="text-light">Notes</span>
          </a>


          <div class="list-notes ml-3">
            <!-- list notes -->
            <p class="text-center">
            <button @click="newNote" class="btn bg-primary text-light p-2 rounded pl-5 pr-5">
              + Tambah Note Baru 
            </button>
            </p>
          </div>

          <div class="batas pt-1 pb-1 bg-secondary mt-3 mb-3"></div>

          <h4 class="text-light ml-3 mb-3">Daftar Notes : </h4>
          <div style="height:65vh; overflow-y: scroll;">
            <div>
                <listNotes :propListNote="notes" :propEditNote="editNote"/>
            </div>
          </div>

        </div>

        <div class="col-md-9" >
          <CreateNote :propCreateNote="createNote" :propDataNote="dataNote"/>  <!-- value dari dataNote akan dikirim ke propDataNote di CreateNote.vue -->
          <!-- kita membuat props(properti) propCreateNote yang akan ditangkap oleh file CreateNote -->
        </div>
    </div>


</template>

<script>
import ListNotes from './ListNotes.vue';
import CreateNote from './CreateNote.vue';

export default {
    name: "Index",

    components: {
      ListNotes,
      CreateNote
    },

    data: function() {
        return {
          notes: [{id:1, title: "contoh1", description: "deskripsi contoh1"}],
          editNotes: {},
          dataNote: {}
        }
    },

    methods: {
      newNote: function() {
          // ini adalah method untuk menambahkan note baru
      },
      createNote: function(title, description) { // disini kita menerima parameter data yang dikirimkan oleh CreateNote...
        let newNote = {"id" : this.notes.length + 1, "title" : title, "description" : description};

        this.notes.push(newNote);
      },
      editNote: function(id) { //editNote menerima id yang dikirimkan oleh propEditNote dari ListNotes.vue
        this.editNotes = this.notes.find(note => note.id == id); // lalu kita mencari object mana yang cocok dengan id list note yang di klik oleh user.

        this.dataNote = this.editNotes; // lalu kita assign nilai dari editNotes diatas ke dataNote
      }

    }
}
</script>

<style>


</style>