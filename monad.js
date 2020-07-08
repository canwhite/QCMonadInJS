/*======================================
目的：获取一个节点的孙子节点
=======================================*/

//获取一个节点的子节点们
//children :: a -> [a]
var children = (node)=>{
    var chis = node.childNodes;
    var arr = [];
    chis.forEach((item)=>{
        arr.push(item);
    });
    return arr;
};

//bind可以将任意函数转换成输入输出相同的函数，使其更容易复合
//bind :: (a -> [a]) -> ([a] -> [a])
var bind = (f)=>{
    //这里的list是f的参数,这里是对参数进行处理
    //让输入的内容为数组，我们接下来用unit处理
    return (list)=>{
        var output = [];
        list.forEach((item)=>{
            output = output.concat(f(item))
        });
        return output;
    }
}

//unit处理最终入参
// unit :: a -> [a]
var unit = (x)=>{[x]}


//孙子节点，需要对子节点求节点，可以使用两个children函数
//为了复合，这就要保证两个children的输入和输出一致，
//也就是上边的bind的意义

var compose =(f,g)=>{
    return (x)=>{
        //g的输出，作为f的输入
        return f(g(x))
    }
}



/*
ar div = document.getElementsByTagName('div')[0];
var grandchildren = compose(bind(children), bind(children));

grandchildren(unit(div))

// -> [<h1>…</h1>, <p>…</p>, ...]

*/

