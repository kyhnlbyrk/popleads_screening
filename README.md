# Gereksinimler

* Sizlere daha bitmemiş bir <Library /> componentı veriliyor.
* Başka bir HTML elementi eklemenize gerek yoktur.
* refs kullanımı yasaklıdır.
* Görüşme esnasında Google kullanabilirsiniz.

* <Library /> componentı mount olduktan sonra, 2 saniye bekleyiniz ve kitapların JSON datasını 
http://localhost:3000/books.json adresinden JavaScript'in `fetch` metodunu kullanarak çekiniz.
* Data başarılı bir şekilde yüklenince loading ikonunu kaldırınız.
* "books" arrayinin datasını <Book/> componentını kullanarak render ediniz.
* <Book/> componentına gerekli parametreleri paslayınız.
* Search alanına yazmak kitapları title veya author a göre filtrelemeli.
  * Yani kitap sadece girilen input verini "title" ında yada "author"ında yer alıyorsa gösterilmelidir.
  * Arama case insensitive olmalıdır.
    Örneğin, "Da Vinci Code" kitabı "da Vinci", "DA VINCI", "dA VInci" gibi aramalarda gösterilmelidir.
  * Eğer arama alanı boş ise, bütün kitaplar gösterilmelidir.
* Yukarı okuna basmak kitap sıralamasını ilk önce en eski kitap gösterilecek şekilde değiştirmelidir.
* Aşağı okuna basmak kitap sıralamasını ilk önce en yeni kitap gösterilecek şekilde değiştirmelidir.

---

# Yardım

* Projeyi git clone yaparak clone ediniz.
* Clone edilen projede `npm i` çalıştırınız.
* Kurulum bittikten sonra `npm start` ile projeyi ayağa kaldırınız.
* CSS değişiklikleri son puanınızı etkilemeyecektir.