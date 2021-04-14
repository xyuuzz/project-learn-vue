/*

VUE.JS 
adalah sebuah framework Front-End yang bisa dijalankan tanpa menggunakan server node. Tapi kalau dijalankan tanpa node, nanti kita akan menjadi lebih kesulitan, dibandingkan dengan saat kita menggunakan server node saat menggunakan vue.js .


DEPLOY VUE.JS agar bisa dibuka tanpa menggunakna server node.js, kalau ini mah cara nya gampang bangeeet, kita tinggal tulis di cmd : npm run build. Gunanya adalah untuk membuat folder dist pada folder project vue kita, yang nanti isinya adalah file file website(html, css. js) yang berhasil di compile dari komponen vue JS .

Jika kau baru pertama kali menggunakan npm run build pada project vue muu, maka kita wajib menambahkan config tambahan pada project vue kita.
Caranya :
 - buat file baru dengan nama : vue.config.js
 - buka file tersebut dan tuliskan kode yang ada dibawah
            module.exports = {
                publicPath: "./"
            }
 - lalu save, dan tadaaa.. vue js berhasil kita deploy.

*/