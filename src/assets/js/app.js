
    function showTab(tabIndex) {
            const contents = document.querySelectorAll('.tab-content > div');
            contents.forEach(content => content.classList.add('hidden'));
    document.getElementById('tab-' + tabIndex).classList.remove('hidden');
        }

    const tabTwo = document.querySelectorAll('.tabTwo');
    const contentsTwo = document.querySelectorAll('.tabsInfoTwo');

        tabTwo.forEach(tab => {
        tab.addEventListener('click', () => {
            const isActiveTab = document.querySelector('.tabTwo.active');
            if (isActiveTab) {
                isActiveTab.classList.remove('active');
                isActiveTab.classList.add();
            }
            contentsTwo.forEach(content => content.classList.add('hidden'));
            tab.classList.add('active');
            tab.classList.remove('bg-roseWhite', 'text-steel',);

            const target = tab.getAttribute('data-target');
            const targetContent = document.getElementById(target);
            targetContent && targetContent.classList.remove('hidden');
        });
        });