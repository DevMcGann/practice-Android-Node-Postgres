package com.gsoft.pokeapp.ui.loginScreen

import android.os.Bundle
import android.view.View
import androidx.activity.addCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.gsoft.pokeapp.R


class LoginFragment : Fragment(R.layout.fragment_login) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        requireActivity().onBackPressedDispatcher.addCallback(viewLifecycleOwner) {
            // With blank your fragment BackPressed will be disabled.
        }
        (activity as AppCompatActivity?)!!.supportActionBar!!.hide()
    }
}