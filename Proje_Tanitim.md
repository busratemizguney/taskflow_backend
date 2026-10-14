# TASKFLOW - Görev ve Proje Yönetim Sistemi API

## Proje Tanımı ve Amacı
Bu proje, bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip edebilmesi amacıyla geliştirilmiş RESTful bir backend API altyapısıdır. Sistem tamamen REST API prensiplerine uygun şekilde tasarlanmıştır.

## Sistem Senaryosu ve Özellikleri
- **Görev Yönetimi:** Sistemde yeni görevler oluşturulabilir, var olan görevler listelenebilir, detayları görüntülenebilir, güncellenebilir ve silinebilir (CRUD).
- **Atama ve Önceliklendirme:** Görevler çalışanlara atanabilir ve durumları (pending, in_progress, completed) ile öncelik seviyeleri (low, medium, high) takip edilebilir.
- **İstek Loglama:** Tüm API istekleri (HTTP metodu, endpoint ve zaman damgası) özel bir logger middleware vasıtasıyla konsola kaydolur.

## Teknik Mimari
- **Çalışma Ortamı (Runtime):** Node.js
- **Web Framework:** Express.js
- **Mimari Desen:** Katmanlı Mimari (Controller - Route - Model - Middleware)
- **Veri Yönetimi:** Bellek İçi Yapı (In-Memory Data Array)

## API Endpoint Listesi
- `GET /api/tasks` -> Tüm görevleri listeler.
- `GET /api/tasks/:id` -> ID'si verilen görevin detayını getirir.
- `POST /api/tasks` -> Yeni bir görev oluşturur.
- `PUT /api/tasks/:id` -> Görev bilgilerini ve durumunu günceller.
- `DELETE /api/tasks/:id` -> Görevi sistemden siler.git add Proje_Tanitim.md