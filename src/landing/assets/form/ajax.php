<?php
header('Content-Type: application/json');
$arResult['response']['status'] = 'fail';
$arRequest = json_decode(file_get_contents('php://input'), true);

if (empty($arRequest['NAME'])) {
    $arResult['response']['errors'][] = [
        'error' => 'phone-empty',
        'status' => 'fail',
        'text' => 'Пожалуйста заполните поле Имя'
    ];
}

if (empty($arRequest['PHONE'])) {
    $arResult['response']['errors'][] = [
        'error' => 'phone-empty',
        'status' => 'fail',
        'text' => 'Пожалуйста заполните поле Телефон'
    ];
}

if (empty($arResult['response']['errors'])) {
    $arResult['response']['status'] = 'ok';
} else {
    echo json_encode($arResult['response']['errors']);
}

$to = 'trushkov174@gmail.com';
$subject = 'Форма заявки с лендинга FOODEX';

$message = "Email: ". $arRequest['NAME']. "\nТелефон: " . $arRequest['PHONE'];
if(!empty($arRequest['PHONE']) && !empty($arRequest['NAME'])){
    mail($to, $subject, $message);
}

echo json_encode($arResult['response']);
