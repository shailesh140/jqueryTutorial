$("#search-question").keyup(function() {
    var filter, ques_list, questions, question, count=0;
    filter = this.value.toUpperCase();

    ques_list = $("#faq-question-list");
    questions = ques_list.children("div.card");
    
    for (i = 0; i < questions.length; i++) {
        question = $(questions[i]).find("div.card-header").text().toUpperCase();
        
        
        const index = question.indexOf(filter)

        if (index > -1) {
            var htmlR = question.substr(0, index) + '<span class="text-yellow">' + question.substr(index, filter.length) + '</span>' + question.substr(index + filter.length);
            // console.log(htmlR);
            $(questions[i]).html(htmlR);
            //$(questions[i]).css("display","");
            $(questions[i]).css("display","");
            count++;
        } else {
            $(questions[i]).hide();
            $(questions[i]).css("display","none");
        }
    }
    
    if(count <= 0){
        $(ques_list).children("div.not-found").remove();
        $(ques_list).append($("<div class='not-found text-center'/>").append($("<span/>").addClass("text-dark font-weight-bolder h5").append("Question Not Found.")));
    }else{
        $(ques_list).children("div.not-found").remove();
    }
});