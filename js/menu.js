// menu.js
console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        var $logo = $('header h1'),
        
            $menuButton = $('.nav'),
            $menuBox = $('#menu'),

            $about = $('#aboutmenu'),
            $contact = $('#contactmenu'),
            $work = $('#workmenu'),
            $worksub = $('#worksub'),

            $nav1 = $('#nav1'),
            $nav2 = $('#nav2'),
            $nav3 = $('#nav3')

            $menutrans = $('#menutrans'),
            $menutrans2 = $('#menutrans2'),
            
            $menuworkweb = $('#goworkweb'),
            $menuworketc = $('#goworketc'),

            isMenu = false,
            isWork = false;

        $logo.on('click', function(e) {
            e.preventDefault();
            console.log("로고 클릭");

            $menutrans2.css({
                'top' : '-100vw',
                'left' : '0'
            });

            $menutrans2.animate({
                'top' : '0',
            }, 900);

            $nav1.css({
                'transform' : 'rotate(0deg)',
                'top' : '0'
            });
            $nav2.css({
                'opacity' : '1',
            });
            $nav3.css({
                'transform' : 'rotate(0deg)',
                'bottom' : '0'
            });

            setTimeout(function() { 
                location.href = './home.html'
            }, 1000);

        });


        $about.on('click', function(e){
            // e.preventDefault();
            // $work.css('display', 'none');
            // $contact.css('display', 'none');
            e.preventDefault();
            $menutrans.css({
                'top' : '0',
            });


            $menutrans.animate({
                'right' : '0',
            }, 1000);
            

            $nav1.css({
                'transform' : 'rotate(0deg)',
                'top' : '0'
            });
            $nav2.css({
                'opacity' : '1',
            });
            $nav3.css({
                'transform' : 'rotate(0deg)',
                'bottom' : '0'
            });

            setTimeout(function() { 
                location.href = './about.html'
            }, 1100);
        });

        $contact.on('click', function(e){
            // e.preventDefault();
            // $work.css('display', 'none');
            // $contact.css('display', 'none');
            e.preventDefault();
            $menutrans.css({
                'top' : '-100vh',
                'right' : '0'
            });
            $menutrans2.css({
                'top' : '100vh',
                'right' : '0'
            });


            $menutrans.animate({
                // 'right' : '50vw',
                'top' : '0vh',
            }, 900);

            setTimeout(function() { 
                $menutrans2.animate({
                    // 'right' : '50vw',
                    'top' : '50vh',
                }, 500);
            }, 1000);

            $nav1.css({
                'transform' : 'rotate(0deg)',
                'top' : '0'
            });
            $nav2.css({
                'opacity' : '1',
            });
            $nav3.css({
                'transform' : 'rotate(0deg)',
                'bottom' : '0'
            });

            setTimeout(function() { 
                location.href = './contact.html'
            }, 2000);
        });


        $menuButton.on('click', function(e)
        {
            console.log("클릭");

            if(!isMenu)
            {
                $nav1.css({
                    'transform' : 'rotate(45deg)',
                    'top' : '13px'
                });
                $nav2.css({
                    'opacity' : '0',
                });
                $nav3.css({
                    'transform' : 'rotate(-45deg)',
                    'bottom' : '13px'
                });

                $menuBox.animate({
                    'right' : '0',
                }, 1000);

                isMenu = true;
            } else
            {
                $nav1.css({
                    'transform' : 'rotate(0deg)',
                    'top' : '0'
                });
                $nav2.css({
                    'opacity' : '1',
                });
                $nav3.css({
                    'transform' : 'rotate(0deg)',
                    'bottom' : '0'
                });


                $menuBox.animate({
                    'right' : '-100vw',
                }, 1000);
                isMenu = false;
            }
        });

        $work.on('click', function(e)
        {
            e.preventDefault();

            // $menutrans.css({
            //     'top' : '0',
            //     'right' : '-100vw'
            // });
            // $menutrans2.css({
            //     'top' : '0',
            //     'left' : '-100vw'
            // });

            // $menutrans.animate({
            //     'right' : '0',
            // }, 900);

            // setTimeout(function() { 
            //     $menutrans2.animate({
            //         // 'right' : '50vw',
            //         'left' : '-50vw',
            //     }, 500);
            // }, 1000);

            // $nav1.css({
            //     'transform' : 'rotate(0deg)',
            //     'top' : '0'
            // });
            // $nav2.css({
            //     'opacity' : '1',
            // });
            // $nav3.css({
            //     'transform' : 'rotate(0deg)',
            //     'bottom' : '0'
            // });

            if(!isWork)
            {
                $worksub.animate({
                    'left' : '50%',
                }, 1000);
                isWork = true;
            } else
            {
                $worksub.animate({
                    'left' : '200%',
                }, 1000);
                isWork = false;
            }
        });

        // menuworkweb
        $menuworkweb.on('click', function(e)
        {
            e.preventDefault();

            $menutrans.css({
                'top' : '0',
                'right' : '-100vw'
            });
            $menutrans2.css({
                'top' : '0',
                'left' : '-100vw'
            });

            $menutrans.animate({
                'right' : '0',
            }, 900);

            setTimeout(function() { 
                $menutrans2.animate({
                    // 'right' : '50vw',
                    'left' : '-50vw',
                }, 500);
            }, 1000);

            $nav1.css({
                'transform' : 'rotate(0deg)',
                'top' : '0'
            });
            $nav2.css({
                'opacity' : '1',
            });
            $nav3.css({
                'transform' : 'rotate(0deg)',
                'bottom' : '0'
            });

            setTimeout(function() { 
                location.href = './work_website.html'
            }, 2000);
        });

        // menuworketc
        $menuworketc.on('click', function(e)
        {
            e.preventDefault();

            $menutrans.css({
                'top' : '0',
                'right' : '-100vw'
            });
            $menutrans2.css({
                'top' : '0',
                'left' : '-100vw'
            });

            $menutrans.animate({
                'right' : '0',
            }, 900);

            setTimeout(function() { 
                $menutrans2.animate({
                    // 'right' : '50vw',
                    'left' : '-50vw',
                }, 500);
            }, 1000);

            $nav1.css({
                'transform' : 'rotate(0deg)',
                'top' : '0'
            });
            $nav2.css({
                'opacity' : '1',
            });
            $nav3.css({
                'transform' : 'rotate(0deg)',
                'bottom' : '0'
            });

            setTimeout(function() { 
                location.href = './work_etc.html'
            }, 2000);
        });

    });
})(jQuery);