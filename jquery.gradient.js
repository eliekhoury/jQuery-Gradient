/*
  jQuery Gradient
  Version: 1.0
  
  Copyright (c) 2011 Elie Khoury.
  http://www.ekhoury.com/
  
  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation
  files (the "Software"), to deal in the Software without
  restriction, including without limitation the rights to use,
  copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following
  conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  Except as contained in this notice, the name(s) of the above 
  copyright holders shall not be used in advertising or otherwise 
  to promote the sale, use or other dealings in this Software 
  without prior written authorization.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.
*/

//
// Usage:
// $(element).gradient('#eee', '#aaa');
// $("#myDiv").gradient('#eee', '#aaa');
//

(function( $ ){

  $.fn.gradient = function(from, to) {
  
	var gK;
	var gV;
	var supported = false;
	
	if ($.browser.webkit || $.browser.safari) {
		gK = 'background-image';
		gV = '-webkit-gradient(linear,left top,left bottom,color-stop(0, ' + from + '),color-stop(1, ' + to + '))';
		supported = true;
	}
	
	if ($.browser.mozilla) {
		gK = 'background-image';
		gV = '-moz-linear-gradient(top, ' + from + ', ' + to + ')';	
		supported = true;
	}
	
	if ($.browser.msie) {
		var version = $.browser.version.substring(0,3);
		switch (version) {
			case '6.0':
			case '7.0':
				gK = 'filter';
				break;
			default: // IE8 and beyond
				gK = 'ms-filter';
		}
		supported = true;
		gV = 'progid:DXImageTransform.Microsoft.gradient(startColorStr=\'' + from + '\', EndColorStr=\'' + to + '\')';
	}
    
    if (supported) { // Opera still doesn't support CSS Gradients :(
    	this.css(gK, gV);
    }
  };
})( jQuery );