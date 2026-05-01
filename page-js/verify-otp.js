const otpCodeInput = document.getElementById('otpCode');
    const otpForm = document.getElementById('otpForm');
    const otpStatus = document.getElementById('otpStatus');
    const countdownText = document.getElementById('countdownText');
    const resendButton = document.getElementById('resendButton');
    const initialSeconds = 300;
    let remainingSeconds = initialSeconds;
    let timerId;

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      return `${minutes}:${secs}`;
    };

    const updateTimer = () => {
      countdownText.textContent = formatTime(remainingSeconds);

      if (remainingSeconds <= 0) {
        clearInterval(timerId);
        resendButton.disabled = false;
        otpStatus.textContent = 'Kod süresi doldu. Yeni kod isteyebilirsiniz.';
        otpStatus.className = 'mt-3 min-h-[1.5rem] text-sm font-semibold text-primary';
        return;
      }

      remainingSeconds -= 1;
    };

    const startTimer = () => {
      clearInterval(timerId);
      remainingSeconds = initialSeconds;
      resendButton.disabled = true;
      updateTimer();
      timerId = setInterval(updateTimer, 1000);
    };

    otpCodeInput.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '').slice(0, 4);
    });

    otpCodeInput.addEventListener('paste', (event) => {
      event.preventDefault();
      otpCodeInput.value = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    });

    otpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const code = otpCodeInput.value;

      if (code.length < 4) {
        otpStatus.textContent = 'Lütfen 4 haneli doğrulama kodunu girin.';
        otpStatus.className = 'mt-3 min-h-[1.5rem] text-sm font-semibold text-primary';
        return;
      }

      if (remainingSeconds <= 0) {
        otpStatus.textContent = 'Kod süresi doldu. Yeni kod isteyin.';
        otpStatus.className = 'mt-3 min-h-[1.5rem] text-sm font-semibold text-primary';
        return;
      }

      if (code === '1234') {
        otpStatus.textContent = 'Doğrulama başarılı. Yönlendiriliyorsunuz...';
        otpStatus.className = 'mt-3 min-h-[1.5rem] text-sm font-semibold text-emerald-600';
      } else {
        otpStatus.textContent = 'Kod hatalı. Lütfen tekrar deneyin.';
        otpStatus.className = 'mt-3 min-h-[1.5rem] text-sm font-semibold text-primary';
      }
    });

    resendButton.addEventListener('click', () => {
      otpCodeInput.value = '';
      otpCodeInput.focus();
      otpStatus.textContent = 'Yeni doğrulama kodu gönderildi. Örnek kod: 1234';
      otpStatus.className = 'mt-3 min-h-[1.5rem] text-sm font-semibold text-zinc-500';
      startTimer();
    });

    startTimer();
