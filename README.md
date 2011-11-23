SimpleTagsSelector is a jquery plugin which bundle tags action with textbox

## Example

### Html code

``` html
<input name="item[tags]" id="item_tags" /><br/>
  <ul id="tags">
    <li><a class="tag" href="#">PC</a></li>
    <li><a class="tag" href="#">Laptop</a></li>
    <li><a class="tag" href="#">IPad<a></li>
  </ul>
```

``` js
$(document).ready(function(){
    $('#item_tags').bind_taglist({'list':'#tags'});
});
```

