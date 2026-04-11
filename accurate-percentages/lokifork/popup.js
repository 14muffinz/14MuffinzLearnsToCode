// will delete once i have more of my own js projects. literally just to see percentage change lol
function enableAddingIfValidPage() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"pageIsAo3"}, function(response){
            if (response == true) {
                $("#add-button")[0].disabled = false;
            }
            else if (tabs[0].url.includes("archiveofourown.org")) {
                $("#add-button")[0].textContent = "Incompatible Page";
            }
            else {
                $("#add-button")[0].textContent = "Page is not Ao3";
            }
        });
    });
}
