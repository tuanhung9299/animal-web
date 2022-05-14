const khi_image = require('../images/img/Khỉ.jpg')
const khi2_image = require('../images/img/khỉ2.jpg')
const vuon_image = require('../images/img/Vượn.jpg')
const voc_image = require('../images/img/vọc.jpg')
const voc2_image = require('../images/img/vọc2.jpg')
const botot_image = require('../images/img/bò tót.jpg')
const botot2_image = require('../images/img/bồ tót2.jpg')
const voi_image = require('../images/img/voi.jpg')
const voi2_image = require('../images/img/voi2.jpg')
const cheocheo_image = require('../images/img/cheo cheo.jpg')
//category
const Thu_image = require('../images/Category/Thú.jpg')
const Chim_image = require('../images/Category/Chim.jpg')
const BoSat_image = require('../images/Category/bò sát.jpg')
const LuongCu_image = require('../images/Category/Lưỡng cư.png')
const Ca_image = require('../images/Category/Cá.jpg')
const Giapxac_image = require('../images/Category/Giáp xác.jpg')
const NguyenTheCoVo_image = require('../images/Category/Nguyễn thể có võ.jpg')
const SinhVatBienKhac_image = require('../images/Category/Ngành giun.jpg')
const NganhGiun_image = require('../images/Category/Ngành giun.jpg')
const ConTrung_image = require('../images/Category/Côn trùng.jpg')
const LopHinhNhen_image = require('../images/Category/Lớp hình nhện.jpg')

const animalsCategory = [
    {
        id: 1,
        Name: "Thú",
        image: Thu_image,
        image2: Thu_image,
        slug: '',      
    },
    {
        id: 2,
        Name: "Chim",
        image: Chim_image,
        image2: Chim_image,
        slug: '',      
    },
    {
        id: 3,
        Name: "Bò sát",
        image: BoSat_image,
        image2: BoSat_image,
        slug: '',      
    },
    {
        id: 4,
        Name: "Lương cư",
        image: LuongCu_image,
        image2: LuongCu_image,
        slug: '',      
    },
    {
        id: 5,
        Name: "Cá",
        image: Ca_image,
        image2: Ca_image,
        slug: '',      
    },
    {
        id: 6,
        Name: "Giáp xác",
        image: Giapxac_image,
        image2: Giapxac_image,
        slug: '',      
    },
    {
        id: 7,
        Name: "Nguyễn thể có võ",
        image: NguyenTheCoVo_image,
        image2: NguyenTheCoVo_image,
        slug: '',      
    },
    {
        id: 8,
        Name: "Sinh Vật biển khác",
        image: SinhVatBienKhac_image,
        image2: SinhVatBienKhac_image,
        slug: '',      
    },
    {
        id: 9,
        Name: "Ngành giun",
        image: NganhGiun_image,
        image2: NganhGiun_image,
        slug: '',      
    },
    {
        id: 10,
        Name: "Côn Trùng",
        image: ConTrung_image,
        image2: ConTrung_image,
        slug: '',      
    },
    {
        id: 11,
        Name: "Lớp hình nhiện",
        image: LopHinhNhen_image,
        image2: LopHinhNhen_image,
        slug: '',      
    },
]

const animals = [
    {
        Name: "Vượn",
        description: 'Bốn loài và hai phân loài vượn của Việt Nam có phân bố hầu như là không giao nhau. Tất cả các loài vượn ở Việt Nam đều là vượn đen thuộc chi',
        image: vuon_image,
        image2: vuon_image,
        categoryAnimal: "Thu",
        class: 'nguy cơ tuyệt chủng',
        slug: '',      
    },
    {
        Name: "vọc",
        description: 'Voọc là nhóm linh trưởng độc đáo ở Việt Nam. Có 08 loài và 4 phân loài thuộc 3 chi (giống) khác nhau, chiếm 44% tổng số phân loài của linh trưởng tại Việt Nam. Voọc là nhóm linh trưởng bị đe doạ nhiều nhất ở Việt Nam. Chúng đôi khi bị săn bắn và giết hại một cách dã man theo kiểu thảm sát làm trò đùa',
        image: voc_image,
        image2: voc2_image,
        categoryAnimal: "Thu",
        class: 'nguy cơ tuyệt chủng',
        slug: '',           
    },
    {
        Name: "Voi",
        description: 'Voi Việt Nam là một trong ba loài trong bộ Proboscidea còn lại trên trái đất ngày nay. Việt Nam từng có từ 1500-2000 cá thể phân bố khắp Việt Nam. Số lượng voi đã giảm xuống nhanh chóng và tới năm 2002 chỉ có từ 59 đến 80 cá thể còn sống sót trong tự nhiên. Voi ở Việt Nam tập trung ở Vườn Quốc gia Yok Don và Cát Tiên ở miền Nam Trung Bộ và phân bố rải rác dọc theo vùng biên giới phía Tây với Lào và Campuchia. Cho đến năm 2000, xấp xỉ 150 cá thể voi đã được thuần hoá còn sống chủ yếu tập trung tại tỉnh Đắc Lắc. Voi Việt là loài động vật để lại nhiều dấu ấn trong nền văn hóa, lịch sử Việt Nam.',
        image: voi_image,
        image2: voi2_image,
        categoryAnimal: "Thu",
        class: 'nguy cơ tuyệt chủng',
        slug: '',         
    },
    {
        Name: "Bò tót",
        description: 'Bò tót Đông Nam Á phân bố ở Lai Châu, Sơn La, Hoà Bình, Thanh Hoá, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Nam - Đà Nẵng, Gia Lai, Kom Tum, Đắc Lắc, Lâm Đồng (Bảo Lộc) Đồng Nai (La Ngà, Vĩnh An, Nam Cát Tiên) Sông Bé, Tây Ninh. Nơi sống của bò tót là rừng giá thường xanh, rừng hỗn giao, rừng thứ sinh, rừng khộp, địa hình tương đối bằng phẳng ở độ cao 500 - 1.500m so với mặt biển. Hoạt động ban ngày ở rừng thưa, trảng cỏ cây bụi, sống thành từng đàn 5 - 10 con (có đàn 20 - 30con), đôi khi cũng gặp những cá thể sống đơn độc. Chúng ăn cỏ và lá cây, măng tre, nứa.',
        image: botot_image,
        image2: botot2_image,
        categoryAnimal: "Thu",
        class: 'nguy cơ tuyệt chủng',
        slug: '',           
    },
    {
        Name: "Bò rừng",
        description: 'Bò rừng có ở giữa Biên Hoà, Bà Rịa đến Phan Rí, Đắc Rinh, Phan Thiết, Lâm Đồng, sông La Ngà. Hiện nay có từ Kontum, Đắc Lắc (Đắc Min, Easúp) đến Đồng Nai (Nam Cát Tiên), Sông Bé (Bù Gia Mập). Chúng thích sống ở những sinh cảnh thưa thoáng mát, nhất là rừng khộp. Nơi ở thường là những khu rừng rậm rạp hoặc thung lũng. Bò rừng sống thành đàn từ 10 - 30 con, tập tính sống đàn, ban đêm nghỉ ngơi ngủ, quây thành vòng tròn, con non, con già ở giữa, con tơ khoẻ ở vòng ngoài bảo vệ đàn. Hoạt động kiếm ăn ban ngày vào sáng và chiều tối, buổi trưa nghỉ ngơi và nhai lại. Thức ăn chủ yếu lá cỏ, lá cây.',
        image: '',
        image2: '',
        categoryAnimal: "Thu",
        class: 'nguy cơ tuyệt chủng',
        slug: '',      
    },
    {
        Name: "Cheo cheo",
        description: 'Cheo cheo Nam Dương phân bố Lạng Sơn (Yên Bình, Hữu Lũng), Vĩnh Phú (Tam Đảo), Thanh Hóa (Thường Xuân, Hồi Xuân), Nghệ An (Quỳ Châu, Phủ Quỳ), Hà Tĩnh (Hương Khê), Quảng Trị, Quảng Bình, Thừa Thiên Huế, Gia Lai, Kom Tum, Đắc Lắc, Lâm Đồng, Tây Ninh, Sông Bé, Đồng Nai (La Ngà, Vĩnh An). Sống ở rừng già, rừng thưa cây lá rậm địa hình tương đối bằng phẳng. Nơi ở gốc cây to bụi cây móc. Chỉ ghép đôi trong thời kỳ động dục. Hoạt động ban đêm. Thức ăn chủ yếu của chúng là quả lá cây, cỏ.',
        image: cheocheo_image,
        image2: cheocheo_image,
        categoryAnimal: "Thu",
        class: 'nguy cơ tuyệt chủng',
        slug: '',      
    },
]

const getAllAnimal = () => animals

const getAnimal = (count) => {
    const max = animals.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return animals.slice(start, start + count)
}

const getAllAnimalCategory = () => animalsCategory

const getAnimalCategory = (count) => {
    const max = animalsCategory.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return animalsCategory.slice(start, start + count)
}

const animalData = {
    getAllAnimal,
    getAnimal,
    getAllAnimalCategory,
    getAnimalCategory
}

export default animalData