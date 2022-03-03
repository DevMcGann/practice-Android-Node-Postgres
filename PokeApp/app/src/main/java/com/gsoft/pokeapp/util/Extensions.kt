package com.gsoft.pokeapp.util

import android.app.Activity
import android.content.Context
import android.content.res.Resources
import android.view.View
import android.view.inputmethod.InputMethodManager
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import com.gsoft.pokeapp.R


fun dp2px(dp: Int): Float = dp * Resources.getSystem().displayMetrics.density

fun Activity.hideKeyboard() {
    val inputManager: InputMethodManager =
        this.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
    inputManager.hideSoftInputFromWindow(
        this.currentFocus?.windowToken, InputMethodManager.HIDE_NOT_ALWAYS
    )
}

/*fun bindBackground(
    itemView: View,
    position: Int,
    size: Int
) {
    val contentPadding: Int = dp2px(16).toInt()

    val drawableRes: Int = when {
        size == 1 -> R.drawable.item_top_bottom
        position == 0 -> R.drawable.item_top
        position == size - 1 -> R.drawable.item_bottom
        else -> R.drawable.item_middle
    }
    itemView.background = ContextCompat
        .getDrawable(itemView.context, drawableRes)
    itemView.setPadding(contentPadding, contentPadding,
        contentPadding, contentPadding)
}*/

fun Context.readFileFromAssets(filePath: String): String {
    return resources.assets.open(filePath).bufferedReader().use {
        it.readText()
    }
}