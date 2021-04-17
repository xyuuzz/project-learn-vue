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

          <!--Pembatas-->
          <div class="pt-1 pb-1 bg-secondary mt-3 mb-3"></div>

          <h4 class="text-light ml-3 mb-3">Daftar Notes : </h4>
          <div style="height:65vh; overflow-y: scroll;">
            <div>
                <listNotes :propListNote="notes" :propEditNote="editNote"/>
            </div>
          </div>

        </div>

        <div class="col-md-9" >
          <CreateNote :propCreateNote="createNote" :propDataNote="dataNote" :propUpdateNote="updateNote" :propDeleteNote="deleteNote" />  <!-- value dari dataNote akan dikirim ke propDataNote di CreateNote.vue -->
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
          notes: [], // tempat untuk data note
          editNotes: {}, // wadah untuk data edit note, sebelum dimasukan ke notes
          dataNote: {} // data untuk note
        }
    },

    methods: {
      newNote: function() {
          // ini adalah method untuk menambahkan note baru
          this.dataNote = {id:0, title: '', description: ''};
      },
      createNote: function(title, description) { // disini kita menerima parameter data yang dikirimkan oleh CreateNote...
        let id_note;
        if(this.notes.length === 0) {
          id_note = 1;
        } else {
          id_note = this.notes.length + 1
        }

        let newNote = {"id" : id_note + 1, "title" : title, "description" : description};

        this.notes.push(newNote);
      },
      editNote: function(id) { //editNote menerima id yang dikirimkan oleh propEditNote dari ListNotes.vue
        this.editNotes = this.notes.find(note => note.id == id); // lalu kita mencari object mana yang cocok dengan id list note yang di klik oleh user.

        this.dataNote = this.editNotes; // lalu kita assign nilai dari editNotes diatas ke dataNote
      },
      updateNote: function(id, title, description) {
        // mencari index menggunakan id yang diterima.
        let data_index = this.notes.findIndex(note => note.id == id);

        // untuk mengupdate notes dengan index data yang ingin di update
        this.notes[data_index] = {id: id, title: title, description: description};
      },
      deleteNote: function(id) {
        let data_index = this.notes.findIndex(note => note.id == id);
        this.notes.splice(data_index, 1);
      }

    }
}
</script>

<style>


</style>