<template>
<div class="container">
    <form action="#" method="post" @submit="SubmitNote">
        <div class="header mt-3">
            <div class="float-right mb-4">
                <button type="button" class="btn btn-danger mr-3">Delete</button>
                <button type="submit" class="btn btn-success mr-5">Save</button>
            </div>
        </div>
        <div class="form">
                <input type="text" id="title" class="font-weight-bold form-control bg-light text-black position-relative" placeholder="Judul Note" v-model="title" required >
                <label for="title" id="labelTitle" hidden>
                    <p class="mt-1 text-secondary position-absolute font-weight-bold">Judul HTML</p>
                </label>

                <hr>
                <textarea name="" id="description" cols="30" rows="10" class="form-control bg-light text-dark font-italic" placeholder="Deskripsi" v-model="description" required></textarea>
                <label for="description" id="labelDecription" hidden>
                    <p class="mt-2 text-secondary p-relative font-italic">Deskripsi Note</p>
                </label>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "CreateNote",
    props: {
        propCreateNote: function() {
            // tangkap props dari Index.vue
        },
        propDataNote: { // lalu data yang dikirimkan diterima dalam bentuk object
            type: Object
        }
    },
    data: function() {
        return {
            "title" : '',
            "description" : ''
        }
    },
    methods: {
        SubmitNote: function(event) {
            event.preventDefault();
            // disini kita mengirim argument ke Index.vue dengan perantara propCreateNote
            this.propCreateNote(this.title, this.description);
        },
    },
    watch: { 
        // watch => ketika kita mengubah nilai dari property milik CreateVue, maka nilai yang diubah akan langsung di update oleh watch ini, sehingga ketika kita mengeklik list note, lalu id dari list note tsb diterima oleh Index.vue, lalu Index.vue mengirim object list note sesuai id yang dikirim oleh ListNotes, lalu object list note valuenya akan menjadi isi dari title dan description dari form... 
        propDataNote: function(note) {
            this.title = note.title; // data akan langsung diubah karena menggunakan watch
            this.description = note.description;
        }
    }
}
</script>

<style>

</style>