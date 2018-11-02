$(window).load(function(){
		carroussel("project1");
		carroussel("project2");
		carroussel("project3");
		carroussel("project4");
		carroussel("project5");
		carroussel("project6");


		function carroussel(containerId){
			var target = "#"+containerId;
			var pages = $(target+" li"), current=0;
			var currentPage,nextPage;

			$(target +" .button").click(function(){
				currentPage= pages.eq(current);
				if($(this).hasClass('prevButton'))
				{

					if (current <= 0)
						current=pages.length-1;
					else
						current=current-1;
				}
				else
				{
					if (current >= pages.length-1)
						current=0;
					else
						current=current+1;
				}
				nextPage = pages.eq(current);
				currentPage.hide();
				nextPage.show();
			});
			console.log("hello");
		}
});
