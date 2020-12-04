	$(function(){
        const loading = $('.loading');

        $(window).on('load',function(){
            loading.remove();
        })

        $(window).on('pageshow',function(){
        	$('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
        	$('body').css('overflow','visible');
        })

        $('.carousel').carousel({
        	interval : 3000
        })
        // animatescroll plugin 동작구문
        $('.navbar .navbar-brand').click(function(){
        	$('#top').animatescroll({padding:20});
        })
        $('.navbar li:nth-child(1) a').click(function(){
        	$('#birth').animatescroll({padding:20});
        })
        $('.navbar li:nth-child(2) a').click(function(){
        	$('#product').animatescroll({padding:20});
        })
        $('.navbar li:nth-child(3) a').click(function(){
        	$('#video').animatescroll({padding:20});
        })
        $('.navbar li:nth-child(4) a').click(function(){
        	$('#buy').animatescroll({padding:20});
        })
        $('.navbar li:nth-child(5) a').click(function(){
        	$('#FAQ').animatescroll({padding:20});
        })

        // waypoint plugin 동작구문

        // fadeInUp
		$('.wp1').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp1').addClass('animate__animated animate__fadeInUp')
			}
		},{
			offset:'80%'
		})
		$('.wp1').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp1').removeClass('animate__animated animate__fadeInUp')
			}
		},{
			offset:'80%'
		})

		// fadeInDown
		$('.wp2').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp2').addClass('animate__animated animate__fadeInDown')
			}
		},{
			offset:'80%'
		})
		$('.wp2').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp2').removeClass('animate__animated animate__fadeInDown')
			}
		},{
			offset:'80%'
		})

		// fadeIn
		$('.wp3').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp3').addClass('animate__animated animate__fadeIn')
			}
		},{
			offset:'80%'
		})
		$('.wp3').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp3').removeClass('animate__animated animate__fadeIn')
			}
		},{
			offset:'80%'
		})

		// fadeInLeft
		$('.wp4').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp4').addClass('animate__animated animate__fadeInLeft')
			}
		},{
			offset:'80%'
		})
		$('.wp4').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp4').removeClass('animate__animated animate__fadeInLeft')
			}
		},{
			offset:'80%'
		})

		// fadeInRight
		$('.wp5').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp5').addClass('animate__animated animate__fadeInRight')
			}
		},{
			offset:'80%'
		})
		$('.wp5').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp5').removeClass('animate__animated animate__fadeInRight')
			}
		},{
			offset:'80%'
		})

		// slideInLeft
		$('.wp6').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp6').addClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'80%'
		})
		$('.wp6').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp6').removeClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'80%'
		})

		// fadeIn
		$('.wp7').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp7').addClass('animate__animated animate__fadeIn')
			}
		},{
			offset:'80%'
		})
		$('.wp7').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp7').removeClass('animate__animated animate__fadeIn')
			}
		},{
			offset:'80%'
		})

		// fadeInLeft
		$('.wp8').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp8').addClass('animate__animated animate__fadeInLeft')
			}
		},{
			offset:'80%'
		})
		$('.wp8').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp8').removeClass('animate__animated animate__fadeInLeft')
			}
		},{
			offset:'80%'
		})

		// fadeInRight
		$('.wp9').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp9').addClass('animate__animated animate__fadeInRight')
			}
		},{
			offset:'80%'
		})
		$('.wp9').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp9').removeClass('animate__animated animate__fadeInRight')
			}
		},{
			offset:'80%'
		})

		// fadeInDown
		$('.wp10').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp10').addClass('animate__animated animate__fadeInDown')
			}
		},{
			offset:'80%'
		})
		$('.wp10').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp10').removeClass('animate__animated animate__fadeInDown')
			}
		},{
			offset:'80%'
		})

		// slideInLeft
		$('.wp11').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp11').addClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'70%'
		})
		$('.wp11').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp11').removeClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'70%'
		})

		// slideInLeft
		$('.wp12').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp12').addClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'65%'
		})
		$('.wp12').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp12').removeClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'65%'
		})

		// slideInLeft
		$('.wp13').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp13').addClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'60%'
		})
		$('.wp13').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp13').removeClass('animate__animated animate__slideInLeft')
			}
		},{
			offset:'60%'
		})

		// fadeIn
		$('.wp14').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp14').addClass('animate__animated animate__fadeIn')
			}
		},{
			offset:'80%'
		})
		$('.wp14').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp14').removeClass('animate__animated animate__fadeIn')
			}
		},{
			offset:'80%'
		})

		// fadeInUp
		$('.wp15').waypoint(function(direction){
			if(direction === 'down'){
				$('.wp15').addClass('animate__animated animate__fadeInUp')
			}
		},{
			offset:'80%'
		})
		$('.wp15').waypoint(function(direction){
			if(direction === 'up'){
				$('.wp15').removeClass('animate__animated animate__fadeInUp')
			}
		},{
			offset:'80%'
		})

      })


