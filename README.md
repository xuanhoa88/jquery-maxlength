# jQuery.maxlength

`jQuery.maxlength` is a lightweight jQuery character counter and countdown for inputs and textareas.

## Basic usage

```html
<input type="text" maxlength="50"/>
```

```javascript
$("input").maxlength();
```

Generated HTML:
```
<input type="text" maxlength="50"/>
<div class="maxlength">50 characters left</div>
```

## jQuery.maxlength options

```
text (string, default: '%left characters left')
```
Text to be displayed inside the `.maxlength` div. You can use whatever text you want, or even HTML.

You can also use variables inside that string: `%length` is the length of the text in the field, `%maxlength` is the maximum length, and `%left` is the number of characters left before reaching that maximum length.

```
counterContainer (jQuery object, default: null)
```
The element inside of which to insert the `.maxlength` div. If no `counterContainer` is specified, the div will be inserted right after the field.

### jQuery.maxlength events

Events are triggered on the field. They all use the `maxlength` namespace.

```
update.maxlength
```

Triggered when the length of the text in the field changes.

This event passes six parameters to its event handler: the event object, the field's DOM element (as a jQuery object), the last length of the text in the field, the current length, the maximum length and the number of characters left before reaching that maximum length.

```javascript
$("input").bind("update.maxlength", function(event, element, lastLength, length, maxLength, left){
    console.log(event, element, lastLength, length, maxLength, left);
});
```

### Notes

- If `jQuery.maxlength` is called on an input or a textarea that doesn't have any `maxlength` attribute (or a falsy one), it just won't do anything.
- `jQuery.maxlength` works with `jQuery 1.4` and above.