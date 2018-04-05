const AsyncControl = require('./AsyncControl');
const control = new AsyncControl();
control
  .play(() => {
	  control.pause(() => {
		  control.select(7, () => {
			  control.play(() => {
				  control.next(() => {
					  control.previous(() => {
						  control.play(() => {
							  control.stop(() => {
								  console.log('Finished');
							  });
						  })
					  });
				  });
			  });
		  });
	  });
  });
