$(document).ready(function() {

    // Hiệu ứng cuộn xuống khi click nút mũi tên
    $('#scrollBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#next-content').offset().top
        }, 800); // Thời gian cuộn là 0.8 giây
    });

    // Thêm hiệu ứng hover nhẹ cho nút Get Started bằng jQuery
    $('.btn-start').hover(
        function() { $(this).css('background-color', '#000'); },
        function() { $(this).css('background-color', '#2c2c2c'); }
    );

    // Hiệu ứng xuất hiện dần (FadeIn) cho phần nội dung khi load trang
    $('.hero-content').hide().fadeIn(1500);

});

$(document).ready(function(){
    $('.video-slider').slick({
        infinite: true,
        slidesToShow: 3, // Hiển thị 3 card cùng lúc
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-arrow'), // Kết nối nút custom
        nextArrow: $('.next-arrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function() {
    let currentPosition = 0;
    const cardWidth = 380;
    const track = $('.video-track');
    let isShowingFourth = false;
    
    $('#nextBtn').click(function() {
        if (!isShowingFourth) {
            $('.video-card.hidden').removeClass('hidden');
            isShowingFourth = true;
        }
        
        currentPosition -= cardWidth;
        track.css('transform', `translateX(${currentPosition}px)`);
    });

    $('#prevBtn').click(function() {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            track.css('transform', `translateX(${currentPosition}px)`);
        }
        
        if (currentPosition >= 0 && isShowingFourth) {
            $('.video-card').last().addClass('hidden');
            isShowingFourth = false;
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var sectionOffset = $('.about-section').offset().top - 500;

        if (scrollPos > sectionOffset) {
            $('.about-content').css({
                'opacity': '1',
                'transform': 'translateX(0)',
                'transition': 'all 1s ease'
            });
            $('.image-stack').css({
                'opacity': '1',
                'transform': 'scale(1)',
                'transition': 'all 1s ease'
            });
        }
    });

    // Thiết lập trạng thái ban đầu cho hiệu ứng
    $('.about-content').css({'opacity': '0', 'transform': 'translateX(50px)'});
    $('.image-stack').css({'opacity': '0', 'transform': 'scale(0.9)'});
});

$(document).ready(function() {
    
    // Kiểm tra khi cuộn chuột đến Section 3
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var sectionOffset = $('.clensing-section').offset().top - 500; // Trừ đi 500px để hiệu ứng hiện sớm hơn

        if (scrollPos > sectionOffset) {
            // Hiệu ứng hiện dần và trượt nhẹ từ dưới lên
            $('.clensing-content').css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition': 'all 1s ease'
            });
            $('.clensing-visual img').css({
                'opacity': '1',
                'transform': 'scale(1)',
                'transition': 'all 1s ease 0.3s' // Delay 0.3s cho ảnh
            });
        }
    });

    // Thiết lập trạng thái ban đầu (ẩn đi)
    $('.clensing-content').css({'opacity': '0', 'transform': 'translateY(30px)'});
    $('.clensing-visual img').css({'opacity': '0', 'transform': 'scale(0.9)'});

});

$(document).ready(function() {
    
    // Hiệu ứng Fade In cho toàn bộ Section khi cuộn tới
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var sectionOffset = $('.cta-section').offset().top - 600;

        if (scrollPos > sectionOffset) {
            $('.cta-container').animate({
                opacity: 1,
                top: 0
            }, 1000);
        }
    });

    // Trạng thái ban đầu cho animation
    $('.cta-container').css({
        'opacity': '0',
        'position': 'relative',
        'top': '50px'
    });

    // Hiệu ứng click cho nút CTA
    $('.btn-cta').mousedown(function() {
        $(this).css('transform', 'scale(0.95)');
    }).mouseup(function() {
        $(this).css('transform', 'scale(1)');
    });

});

$(document).ready(function() {
    
    // Hiệu ứng nút Play phóng to nhẹ
    $('.play-overlay').hover(
        function() { $(this).css('transform', 'translate(-50%, -50%) scale(1.1)'); },
        function() { $(this).css('transform', 'translate(-50%, -50%) scale(1)'); }
    );

    // Xử lý nút chuyển Testimonial (giả lập)
    $('.testi-next, .testi-prev').click(function() {
        $('.quote-text').fadeOut(200).fadeIn(500);
        // Ở đây bạn có thể thêm logic thay đổi nội dung chữ
    });

});

$(document).ready(function() {
    
    // Hiệu ứng dịch chuyển nhẹ khi hover vào các link footer
    $('.footer-col ul li a').hover(
        function() {
            $(this).stop().animate({ paddingLeft: '8px' }, 200);
        },
        function() {
            $(this).stop().animate({ paddingLeft: '0px' }, 200);
        }
    );

    // Tự động cập nhật năm hiện tại cho bản quyền (nếu bạn muốn thêm dòng copyright)
    const currentYear = new Date().getFullYear();
    console.log("Namaste Yoga Project - " + currentYear);

});