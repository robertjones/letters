var root = document.body

const abc = [
  {ltr: 'a', pic: '🍎'}, 
  {ltr: 'b', pic: '🍌'}, 
  {ltr: 'c', pic: '🐈'}, 
  {ltr: 'd', pic: '🐕'}, 
  {ltr: 'e', pic: '🐘'}, 
  {ltr: 'f', pic: '🐸'}, 
  {ltr: 'g', pic: '🦒'}, 
  {ltr: 'h', pic: '🏠'}, 
  {ltr: 'i', pic: '🍦'}, 
  {ltr: 'j', pic: '👖'}, 
  {ltr: 'k', pic: '🦘'}, 
  {ltr: 'l', pic: '🦁'}, 
  {ltr: 'm', pic: '🐁'}, 
  {ltr: 'n', pic: '🌃'}, 
  {ltr: 'o', pic: '🐙'}, 
  {ltr: 'p', pic: '🐖'}, 
  {ltr: 'q', pic: '❓'}, 
  {ltr: 'r', pic: '🌈'}, 
  {ltr: 's', pic: '⭐'}, 
  {ltr: 't', pic: '🌳'}, 
  {ltr: 'u', pic: '☂️'}, 
  {ltr: 'v', pic: '🎻'}, 
  {ltr: 'w', pic: '🐋'}, 
  // {ltr: 'x', pic: 'x'}, 
  {ltr: 'y', pic: '🪀'}, 
  {ltr: 'z', pic: '🦓'}, 
]

const choice = (arr, num=1) => {
  let selection = Math.floor(Math.random() * arr.length)
  let before = arr.slice(0,selection)
  let after = arr.slice(selection+1)
  return num <= 0 ? [] : [arr[selection]].concat(choice(before.concat(after) , num-1)) 
}

const probgen = () => {
  let options = choice(abc, 4)
  return {options: options, ans: choice(options)[0]}
}

var prob = probgen()
var msg = ""
var dis = []

const numclick = (option, ans) => {
  if (option == ans) {
    prob = probgen()
    msg = msg == "☹️" ? "😃" : msg + "😃"
    dis = []
  } else {
    msg = "☹️"
    dis.push(option)
  }
}

var Game = {
  view: () => {
    return m("div", [
      m("p", {class: "my-1", style: "font-size: 12rem;"}, prob.ans.pic),
      m("table", {class: "self-center mx-auto my-2"},  
        m("tr", prob.options.map(option => m("td",  {class: "p-1"}, m("button", {onclick: () => numclick(option.ltr, prob.ans.ltr), class: dis.includes(option.ltr) ? "bg-red-500 hover:bg-red-700 text-white font-bold text-4xl w-16 py-2 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold text-4xl w-16 py-2 rounded"}, dis.includes(option.ltr) ? "_" : option.ltr)))
        )
      ),
      m("p", {class: "text-6xl"}, msg)
    ])
  }
}

m.mount(root, Game)