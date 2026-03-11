// JavaScript for Kara Pool Villa Website

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    let isMenuOpen = false;

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-950/85', 'backdrop-blur-lg', 'border-b', 'border-white/5', 'shadow-lg', 'py-3');
            navbar.classList.remove('bg-transparent', 'py-4');
        } else {
            navbar.classList.remove('bg-brand-950/85', 'backdrop-blur-lg', 'border-b', 'border-white/5', 'shadow-lg', 'py-3');
            navbar.classList.add('bg-transparent', 'py-4');
        }
    });

    // Mobile menu toggle
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            // Change icon to close
            mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenu.classList.add('translate-x-full');
            // Change icon back to menu
            mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            document.body.style.overflow = ''; // Restore scrolling
        }
        lucide.createIcons(); // Re-initialize icons because we overwrote innerHTML
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });
});

// Room Details Data
const roomData = {
    'abcd': {
        title: '카라 A, B, C, D동',
        subtitle: '6룸 (4동)',
        rooms: '침대룸 6개(킹사이즈 베드, 룸당 개별 화장실)'
    },
    '12': {
        title: '카라 1, 2동',
        subtitle: '6룸 (2동)',
        rooms: '침대룸 6개(킹사이즈 베드, 룸당 개별 화장실)'
    },
    'ef': {
        title: '카라 E, F동',
        subtitle: '5룸 (2동)',
        rooms: '침대룸 5개(킹사이즈 베드, 룸당 개별 화장실)'
    }
};

// Open Modal
function openRoomModal(roomId) {
    const data = roomData[roomId];
    if (!data) return;

    // Populate data
    document.getElementById('modalRoomTitle').innerText = data.title;
    document.getElementById('modalRoomSubtitle').innerText = data.subtitle;
    document.getElementById('modalRoomCount').innerText = data.rooms;

    // Show modal
    const modal = document.getElementById('roomModal');
    modal.classList.remove('hidden');
    // small delay to allow display block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        document.getElementById('roomModalContent').classList.remove('translate-y-8');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeRoomModal() {
    const modal = document.getElementById('roomModal');
    modal.classList.add('opacity-0');
    document.getElementById('roomModalContent').classList.add('translate-y-8');

    // Wait for transition before hiding
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Service Details Data (Referenced from APM Resort)
const serviceData = {
    'golf': {
        title: '명문 골프장 예약 (GOLF BOOKING)',
        icon: 'flag-triangle-right',
        desc: '편안한 골프여행을 위한 스페셜한 골프 부킹 서비스를 제공합니다. 필리핀 클락의 최상급 골프장에서 수준 높은 라운딩을 즐겨보세요.',
        details: [
            '동광 클락 썬밸리 CC (Donggwang Clark Sun Valley CC)',
            'FA 코리아 CC (FA Korea CC)',
            '미모사 CC (Mimosa CC)',
            '로얄가든 CC (Royal Garden CC)',
            '루이시따 CC (Luisita CC)',
            '프라데라 CC (Pradera CC)',
            '뉴아시아 CC (New Asia CC)'
        ]
    },
    'vehicle': {
        title: '전용 차량 / 렌트 (RENTAL VEHICLE)',
        icon: 'car',
        desc: '편안한 이동을 위한 전용 렌터카 및 기사 포함 차량 서비스를 제공합니다. 공항 픽업부터 관광지 이동까지 안전하게 모십니다.',
        details: [
            '9인승 VAN',
            '15인승 VAN',
            '마닐라 공항 픽업 및 드롭 지원'
        ]
    },
    'massage': {
        title: '출장 및 마사지 샵 예약 (MASSAGE)',
        icon: 'sparkles',
        desc: '라운딩이나 관광 후 지친 몸을 풀 수 있도록 전문 테라피스트의 럭셔리 출장 마사지 또는 검증된 마사지 샵 예약을 도와드립니다.',
        details: [
            '전신 마사지 (오일/드라이)',
            '발 마사지',
            '원하는 시간대에 숙소 방문 출장 서비스',
            '검증된 한인 및 로컬 마사지 샵 예약 대행'
        ]
    },
    'hotspring': {
        title: '일일 관광 & 액티비티 (DAILY TOUR)',
        icon: 'thermometer-sun',
        desc: '온천부터 해양 스포츠까지, 클락과 수빅 등 인근 지역의 다채로운 액티비티를 안전하고 특별하게 경험할 수 있는 일일 관광 프로그램입니다.',
        details: [
            '사방바토 화산 안마 및 푸닝 온천 체험',
            '수빅 비치 요트 투어',
            '수빅 비치 호핑 투어',
            '승마 체험 및 실탄 사격',
            '웨이크 보드 등 다양한 레저 활동 예약'
        ]
    }
};

// Open Service Modal
function openServiceModal(serviceId) {
    const data = serviceData[serviceId];
    if (!data) return;

    // Populate data
    document.getElementById('modalServiceTitle').innerText = data.title;
    document.getElementById('modalServiceDesc').innerText = data.desc;
    document.getElementById('modalServiceIcon').innerHTML = `<i data-lucide="${data.icon}" class="w-6 h-6"></i>`;

    // Populate details list
    const detailsContainer = document.getElementById('modalServiceDetails');
    detailsContainer.innerHTML = '';
    data.details.forEach(item => {
        detailsContainer.innerHTML += `<li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-brand-500 shrink-0 mt-0.5"></i> ${item}</li>`;
    });

    // Re-initialize lucide icons for the newly injected ones
    lucide.createIcons();

    // Show modal
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('hidden');
    // small delay to allow display block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        document.getElementById('serviceModalContent').classList.remove('translate-y-8');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close Service Modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('opacity-0');
    document.getElementById('serviceModalContent').classList.add('translate-y-8');

    // Wait for transition before hiding
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}
