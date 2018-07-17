"@fixture test-wiki";
"@page https://en.wikipedia.org/wiki/Wiki";

"@test"["search-test"] = {
    "1.Click input": function() {
        act.click("#searchInput");
    },
    "2.Type in input": function() {
        act.type("#searchInput", "tariffs");
    },
    "3.Press key ENTER": function() {
        act.press("enter");
    },
    "4.Wait 3000 milliseconds": function() {
        act.wait(3e3);
    },
    "5.Take a screenshot": function() {
        act.screenshot('./123324.png');
    }
};
